
require 'byebug'
class DailyMailer < ApplicationMailer
    def daily_email(user)
      mail(to: user.email , from: 'test@gmail.com', subject: 'Lunch Options') do |format|
        format.text { text_mail }
      end
    end

    
    def text_mail
        "Hello There,\n
        Are you planning to have lunch in the neighborhood today? Check out what the
        restaurants nearby are offering:\n
        #{specialities_for_today}
       
        See you tomorrow"
    end

    def specialities_for_today
        formated_string = ""

        result = Speciality.where(date: Date.today).map do |speciality|
            restaurant = speciality.restaurant
            speciality_list = speciality.specialities.map { |s| "-  #{s}" }.join("\n")
            "\n#{restaurant}\n#{speciality_list}"
        end.join("\n\n")
    end
end
  