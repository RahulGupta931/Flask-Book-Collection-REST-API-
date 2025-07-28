from app import ma
from app.models import Book
from marshmallow import fields, validate, ValidationError

class BookSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True
        include_fk = True
    
    # Field validation
    title = fields.Str(required=True, validate=validate.Length(min=1, max=200))
    author = fields.Str(required=True, validate=validate.Length(min=1, max=100))
    genre = fields.Str(required=True, validate=validate.Length(min=1, max=50))
    year = fields.Int(required=True, validate=validate.Range(min=1000, max=2030))
    
    # Read-only fields
    id = fields.Int(dump_only=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)

# Schema instances
book_schema = BookSchema()
books_schema = BookSchema(many=True)