#!/usr/bin/env ruby
# frozen_string_literal: true

# Checks that the wall-trap image count on disk matches the total declared in _data/wall_traps.yml. 
# Floorsets sharing an 'anchor' share an image set, so their count is only added once.

require "yaml"

REPO_ROOT = File.expand_path("..", __dir__)
IMAGES_DIR = File.join(REPO_ROOT, "assets/images/wall_traps")
DATA_FILE = File.join(REPO_ROOT, "_data/wall_traps.yml")

image_count = Dir.children(IMAGES_DIR).count { |name| name.end_with?(".png") }

declared_count = YAML.load_file(DATA_FILE)
                     .flat_map { |dungeon| dungeon["floorsets"] }
                     .reject { |floorset| floorset["count"].nil? }
                     .uniq { |floorset| floorset["anchor"] || floorset.object_id }
                     .sum { |floorset| floorset["count"] }

if image_count == declared_count
  puts "Wall traps OK: #{image_count} images = #{declared_count} declared."
  exit 0
end

warn "Wall trap mismatch: #{image_count} PNGs on disk vs #{declared_count} declared in #{File.basename(DATA_FILE)}."
exit 1



