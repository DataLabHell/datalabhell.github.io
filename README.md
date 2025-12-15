# DataLabHell GitHub Pages

A Jekyll-based GitHub Pages site using the Chirpy theme.

## Contribution and Authorship

Navigate to "_data/authors.yml_" to add or modify author information for blog posts structured in the following way

```yaml
github username:
   name: full name
   email: mail address
   url: homepage
```

## Prerequisites

- **Ruby** >= 3.1.0 (Ruby 3.2 recommended to match CI/CD)
- **Bundler** >= 2.0
- **Git**

## Installation

### macOS

#### Install Ruby using rbenv (Recommended)

```sh
# Install rbenv using Homebrew
brew install rbenv ruby-build

# Initialize rbenv
rbenv init

# Add rbenv to your shell profile (for zsh)
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc

# For bash, use this instead:
# echo 'eval "$(rbenv init - bash)"' >> ~/.bash_profile
# source ~/.bash_profile

# Install Ruby 3.2
rbenv install 3.2.0
rbenv local 3.2.0

# Verify installation
ruby -v  # Should show ruby 3.2.0
```

#### Alternative: Using RVM on macOS

```sh
# Install RVM
curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm

# Install Ruby 3.2
rvm install 3.2.0
rvm use 3.2.0 --default

# Verify installation
ruby -v  # Should show ruby 3.2.0
```

#### Install Project Dependencies

```sh
# Clone the repository (if not already done)
git clone https://github.com/DataLabHell/datalabhell.github.io.git
cd datalabhell.github.io

# Install bundler
gem install bundler

# Install project dependencies
bundle install
```

### Linux

#### Install Ruby using rbenv (Recommended)

```sh
# Install dependencies
sudo apt-get update
sudo apt-get install -y git curl libssl-dev libreadline-dev zlib1g-dev \
  autoconf bison build-essential libyaml-dev libreadline-dev \
  libncurses5-dev libffi-dev libgdbm-dev

# Install rbenv
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-installer | bash

# Add rbenv to your shell profile
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

# For zsh, use this instead:
# echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
# echo 'eval "$(rbenv init -)"' >> ~/.zshrc
# source ~/.zshrc

# Install Ruby 3.2
rbenv install 3.2.0
rbenv local 3.2.0

# Verify installation
ruby -v  # Should show ruby 3.2.0
```

#### Alternative: Using RVM on Linux

```sh
# Install dependencies
sudo apt-get update
sudo apt-get install -y curl gpg

# Add RVM GPG keys
gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

# Install RVM
curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm

# Install Ruby 3.2
rvm install 3.2.0
rvm use 3.2.0 --default

# Verify installation
ruby -v  # Should show ruby 3.2.0
```

#### Install Project Dependencies

```sh
# Clone the repository (if not already done)
git clone https://github.com/yourusername/datalabhell.github.io.git
cd datalabhell.github.io

# Install bundler
gem install bundler

# Install project dependencies
bundle install
```

## Running Locally

### Basic Server

```sh
bundle exec jekyll serve
```

Then open your browser to `http://localhost:4000`

### With Live Reload

```sh
bundle exec jekyll serve --livereload
```

This automatically refreshes your browser when files change.

### With Drafts

```sh
bundle exec jekyll serve --drafts
```

This includes posts from the `_drafts` folder.

### With Future Posts

```sh
bundle exec jekyll serve --future
```

This shows posts with future dates.

### Custom Host and Port

```sh
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

This allows access from other devices on your network.

## Building for Production

To build the site without serving:

```sh
bundle exec jekyll build
```

The generated site will be in the `_site` directory.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. The deployment is handled by the GitHub Actions workflow in `.github/workflows/pages-deploy.yml`.

## Troubleshooting

### Ruby Version Issues

If you encounter Ruby version errors:

**macOS/Linux (rbenv):**
```sh
# Check current Ruby version
ruby -v

# Install and set Ruby 3.2
rbenv install 3.2.0
rbenv local 3.2.0
```

**macOS/Linux (RVM):**
```sh
# Check current Ruby version
ruby -v

# Install and set Ruby 3.2
rvm install 3.2.0
rvm use 3.2.0
```

### Bundler Version Issues

```sh
# Update bundler
gem install bundler

# Update to match Gemfile.lock
bundle update --bundler
```

### Dependency Issues

```sh
# Clean and reinstall
rm -rf vendor/bundle
bundle install
```

### Permission Errors (Linux)

If you encounter permission errors, avoid using `sudo` with gem commands. Instead, ensure rbenv or RVM is properly configured to install gems in your home directory.

## Project Structure

- `_posts/` - Blog posts in Markdown
- `_config.yml` - Site configuration
- `assets/` - Images, CSS, and JavaScript
- `.github/workflows/` - GitHub Actions deployment configuration

## Contributing

1. Create a new branch for your changes
2. Make your modifications
3. Test locally with `bundle exec jekyll serve`
4. Commit and push your changes
5. Create a pull request

## License
<p xmlns:cc="http://creativecommons.org/ns#" ><a rel="cc:attributionURL" href="https://blog.datalabhell.at">This work</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://datalabhell.at">Data Lab Hell Gmbh</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>
