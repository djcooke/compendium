# frozen_string_literal: true
# ^ This comment makes all string literals immutable by default in this file.

# Development environment setup
desc "Set up the development environment"
task :setup do
  puts "Setting up development environment..."
  
  # Install Ruby dependencies
  system("bundle install") || abort("Bundle install failed")
  
  puts "Installing development tools..."
  
  # Install both linting tools via npm
  system("npm install -g markdownlint-cli yaml-lint") || abort("Failed to install linting tools")
  
  # Install git hooks if lefthook config exists
  if File.exist?(".lefthook.yml")
    system("bundle exec lefthook install") || abort("Failed to install git hooks")
    puts "Git hooks installed"
  end
  
  puts "Setup complete! Run 'rake serve' to start development server"
end

# Linting
desc "Run linting checks"
task :lint do
  system("./scripts/checks.sh") || abort("Linting failed")
end

desc "Run full check (lint + build)"
task :check do
  Rake::Task[:lint].invoke
  Rake::Task[:build].invoke
end

# Build
desc "Build the Jekyll site"
task :build do
  system("bundle exec jekyll build") || abort("Build failed")
end

# Development server
desc "Serve the Jekyll site locally"
task :serve do
  system("bundle exec jekyll serve")
end

# Default task when just running 'rake'
task default: :serve
