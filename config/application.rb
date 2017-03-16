require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Bidii
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Adds font folder to rails asset pipeline
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

    # Stop generating helpers for asssets
    config.generators do |g|
      g.assets false
    end

  end
end
