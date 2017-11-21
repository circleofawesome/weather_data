class CreateWeathers < ActiveRecord::Migration[5.1]
  def change
    create_table :weathers do |t|
      t.datetime :date
      t.float :temp

      t.timestamps
    end
  end
end
