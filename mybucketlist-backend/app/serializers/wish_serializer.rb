class WishSerializer < ActiveModel::Serializer
  attributes :id, :content, :fulfilled, :category_id
end
