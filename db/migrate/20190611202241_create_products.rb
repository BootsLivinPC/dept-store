class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.string :category
      t.float :price
      t.belongs_to :department, foreign_key: true

      t.timestamps
    end
  end
end
