#!/bin/bash
set -euo pipefail

# Get the tag version from Buildkite or default to a pre-release tag
TAG_VERSION=$(buildkite-agent meta-data get "tag-version" --default "0.0.0-alpha-$(date +%Y%m%d%H%M%S)")
# TAG_VERSION=${TAG_VERSION/v/}

#setup git
# git config user.email "Widen Developers"
# git config user.name "widendev@widen.com"

# Publish the package
npm publish --tag ${TAG_VERSION}
npm version ${TAG_VERSION} --no-git-tag-version

# Annotate the build with the types version
buildkite-agent annotate --style success "Published to \`@widen/react-modal@${TAG_VERSION}\`. Install with the following command:

\`\`\`bash
yarn add @widen/react-modal
\`\`\`
"
