class MailerJob < ApplicationJob
  queue_as :default

  def perform
    users = User.all

    users.each do |user|
      DailyMailer.daily_email(user).deliver_now
    end
  end
end
