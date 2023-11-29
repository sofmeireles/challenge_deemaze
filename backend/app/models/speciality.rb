class Speciality < ApplicationRecord
    validates :date, presence: true
    validates :restaurant, presence: true
    validates :specialities, presence: true
end
