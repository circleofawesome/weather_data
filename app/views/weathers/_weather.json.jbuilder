json.extract! weather, :id, :date, :temp, :created_at, :updated_at
json.url weather_url(weather, format: :json)
