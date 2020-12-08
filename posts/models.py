from django.db import models
from django.urls import reverse
from django.template.defaultfilters import slugify
from django.db.models.signals import pre_save
from .utils import unique_slug_generator
# Create your models here.

class Post(models.Model):
	post_title = models.CharField(max_length=500)
	post_slug = models.SlugField(unique=True, blank=True)
	post_description = models.TextField()
	post_image = models.ImageField(upload_to='post_images', default='blog_default.png')
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.post_title)[:20]

	# returns url for the single post page
	def get_absolute_url(self):
		return reverse('Post-details', kwargs={'slug':self.post_slug})

	def get_post_comments(self):
		return self.comment_set.all().order_by('-date_added')

	def get_number_of_comments(self):
		return self.comment_set.all().count()


# generates unique slug for each post before it is saved the first time			
def create_slug(sender, instance, **kwargs):
	if not instance.post_slug:
		instance.post_slug = unique_slug_generator(instance)		
		instance.save()

pre_save.connect(create_slug, sender=Post)		


class Review(models.Model):
	customer_name = models.CharField(max_length=200)
	image = models.ImageField(upload_to='user_images', default='profile.png')
	review = models.TextField()


class Comment(models.Model):
	first_name = models.CharField(max_length=150)
	last_name = models.CharField(max_length=150)
	comment = models.TextField()
	post = models.ForeignKey(Post, on_delete=models.CASCADE, blank=True)
	date_added = models.DateTimeField(auto_now_add=True)



