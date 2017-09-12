class EthereumDataPoints < ActiveRecord::Migration[5.1]
  def change
    create_table :ethereum_data_points do |t|
      t.integer :price
      t.timestamps
    end
  end
end
