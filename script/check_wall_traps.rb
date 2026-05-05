#!/usr/bin/env ruby
# frozen_string_literal: true

# Sanity check: compare wall-trap image counts on disk to the per-section
# counts declared in _data/wall_traps.yml. Reports mismatches; exits non-zero
# if any are found so it can be wired into CI.
#
# Counts unique numeric IDs (collapsing "-1", "-2" variant suffixes that
# represent multiple angles of the same trap location).

require "yaml"
require "pathname"

ROOT = Pathname.new(__dir__).parent
IMAGE_DIR = ROOT.join("assets/images/wall_traps")
DATA_FILE = ROOT.join("_data/wall_traps.yml")

# Maps an image filename prefix to the floorset ranges it covers in the data.
SECTIONS = {
  "potd_1"   => ["1-10"],
  "potd_11"  => ["11-20"],
  "potd_21"  => ["21-30"],
  "potd_31"  => ["31-40", "41-50"],
  "potd_51"  => ["51-60", "61-70", "71-80"],
  "potd_81"  => ["81-90", "91-100", "101-110"],
  "potd_111" => ["111-120", "121-130"],
  "potd_131" => ["131-140", "141-150"],
  "potd_151" => ["151-160", "161-170", "171-180", "181-190", "191-200"],
  "hoh_1"    => ["1-10", "11-20"],
  "hoh_41"   => ["41-50", "51-60", "61-70", "71-80"]
}.freeze

def image_count(prefix)
  Dir.glob(IMAGE_DIR.join("#{prefix}_*.png"))
     .map { |f| File.basename(f, ".png").sub(/-\d+$/, "") }
     .uniq
     .size
end

def declared_count(data, dungeon, ranges)
  entry = data.find { |d| d["name"].start_with?("#{dungeon} ") || d["name"] == dungeon }
  ranges.sum { |r| entry["floorsets"].find { |f| f["range"] == r }["count"].to_i }
end

data = YAML.load_file(DATA_FILE)
mismatches = []

SECTIONS.each do |prefix, ranges|
  dungeon = prefix.split("_").first.upcase.sub("POTD", "PotD").sub("HOH", "HoH")
  on_disk = image_count(prefix)
  declared = declared_count(data, dungeon, ranges)
  next if on_disk == declared

  mismatches << format(
    "  %-9s %-40s images=%d declared=%d",
    prefix, "#{dungeon} #{ranges.join(', ')}", on_disk, declared
  )
end

if mismatches.empty?
  puts "Wall traps: image counts match _data/wall_traps.yml."
  exit 0
end

warn "Wall trap count mismatches:"
warn mismatches
exit 1
