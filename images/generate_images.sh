#!/usr/bin/env bash

set -e

IMAGES=(
    "kemset_coarse_primer.png"
    "kemset_elasticote_450.png"
    "kemset_watertite_poly.png"
    "kemset_ekoplast_50.png"
)

SIZES=(1920 1280 960 640)

QUALITY_AVIF=50
QUALITY_WEBP=75
QUALITY_JPG=82

for IMAGE in "${IMAGES[@]}"; do
  BASENAME="${IMAGE%.*}"

  echo "Processing: $IMAGE"

  for WIDTH in "${SIZES[@]}"; do
    echo "  → Size: $WIDTH px"

    magick "$IMAGE" -resize "$WIDTH" -strip -quality "$QUALITY_AVIF" "${BASENAME}_${WIDTH}.avif"

    magick "$IMAGE" -resize "$WIDTH" -strip -quality "$QUALITY_WEBP" "${BASENAME}_${WIDTH}.webp"

    magick "$IMAGE" -resize "$WIDTH" -strip -quality "$QUALITY_JPG" "${BASENAME}_${WIDTH}.jpg"
  done
done

echo "All images generated!"
