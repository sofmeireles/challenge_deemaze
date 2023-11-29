class CreateSpecialities < ActiveRecord::Migration[7.0]
  def change
    create_table :specialities do |t|
      t.string :restaurant
      t.date :date
      t.json :specialities

      t.timestamps
    end
  end
end
