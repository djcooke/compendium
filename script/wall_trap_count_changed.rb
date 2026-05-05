#!/usr/bin/env ruby
# frozen_string_literal: true

# Note:
# Wall traps pictures should be uplodaded to /assets/images/wall_traps/ as {DD}_{startingFloor}_{walltrapNum}-{picNum}.png and count updated in _data/wall_traps.yml. 
# This script checks that the count of wall traps in the data file matches the number of pictures on disk.

require "yaml"

REPO_ROOT = File.expand_path("..", __dir__)
IMAGES_DIR = File.join(REPO_ROOT, "assets/images/wall_traps")
DATA_FILE = File.join(REPO_ROOT, "_data/wall_traps.yml")

trap_count = Dir.children(IMAGES_DIR)
                .select { |name| name.end_with?(".png") }
                .map { |name| name.sub(/(-\d+)?\.png\z/, "") }
                .uniq
                .size

declared_count = YAML.load_file(DATA_FILE)
                     .flat_map { |dungeon| dungeon["floorsets"] }
                     .reject { |floorset| floorset["count"].nil? }
                     .uniq { |floorset| floorset["anchor"] || floorset.object_id }
                     .sum { |floorset| floorset["count"] }

if trap_count == declared_count
  puts "Wall traps OK: #{trap_count} traps = #{declared_count} declared."
  exit 0
end

warn "Wall trap mismatch: #{trap_count} traps on disk vs #{declared_count} declared in #{File.basename(DATA_FILE)}."
warn "Wall traps pictures should be uplodaded to /assets/images/wall_traps/ as {DD}_{startingFloor}_{walltrapNum}-{picNum}.png and count updated in _data/wall_traps.yml"
exit 1
