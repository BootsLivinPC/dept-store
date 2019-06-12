class CreateDepartments < ActiveRecord::Migration[5.2]
  def change
    create_table :departments do |t|
      t.string :title
      t.string :description
      t.string :hours
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
