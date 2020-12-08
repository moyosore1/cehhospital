import uuid
from django.utils.text import slugify

def unique_slug_generator(model_instance):
	code = str(uuid.uuid4())[:8].replace('-','').lower()
	slug = slugify(str(code))

	model_class = model_instance.__class__

	while model_class._default_manager.filter(post_slug=slug).exists():
		code = str(uuid.uuid4())[:8].replace('-','').lower()
		slug = slugify(str(code))
	return slug