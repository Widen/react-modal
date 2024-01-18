#!/bin/bash
set -euo pipefail

# Get the tag version from Buildkite or default to a pre-release tag
TAG_VERSION=$(buildkite-agent meta-data get "tag-version" --default "0.0.0-alpha-$(date +%Y%m%d%H%M%S)")
TAG_VERSION=${TAG_VERSION/v/}

# Publish the package
npm version ${TAG_VERSION}

# Annotate the build with the types version
buildkite-agent annotate --style success "Published to \`@widen/react-modal@${TAG_VERSION}\`. Install with the following command:

\`\`\`bash
yarn add @widen/react-modal
\`\`\`
"
