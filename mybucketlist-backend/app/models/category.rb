class Category < ApplicationRecord
    has_many :wishes
    validates :name, presence: true
end
