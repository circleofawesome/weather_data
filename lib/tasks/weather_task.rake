namespace :weather_task do
  desc "Grabs weather data and posts to db"
  task :get_weather => [:environment] do

    p "this task is working"
    #User.create(:name=>'Lizzie', :age=>20)
    def my_weather
      require 'net/http'
      require 'json'
      require 'open-uri'

      url='https://api.openweathermap.org/data/2.5/weather?zip=10034,us&appid=8a7dcab387bf046722ebf262af30f9fa'
      weather=JSON.load(open(url))

      return weather["main"]["temp"]-273.15
    end

    Weather.create(:date=>Time.now, :temp=>my_weather)
    #Weather.create(:date=>Time.now, :temp=>300.64)
  end

end