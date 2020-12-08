from django.shortcuts import render, redirect
from .models import Post, Review, Comment
from django.http import HttpResponse
from django.http import Http404
from django.contrib import messages
from django.core.mail import send_mail
# Create your views here.

def home(request):
	posts = Post.objects.all()
	reviews = Review.objects.all()
	context = {
		'posts': posts,
		'reviews': reviews,
	}
	return render(request, 'posts/home.html', context)

def single_post(request, slug):
	try:
		post = Post.objects.get(post_slug=slug)
	except Post.DoesNotExist:
		raise Http404("Post does not exist")
	randomposts = Post.objects.all().exclude(post_slug=slug).order_by('?')[:3]	
	return render(request, 'posts/blog_single.html', {'post':post, 'randomposts':randomposts})


def post_comment(request, id):
	if request.method == 'POST':
		try:
			post = Post.objects.get(pk=id)
		except Post.DoesNotExist:
			raise Http404("Post does not exist")

		if request.user.is_authenticated:
			first_name = request.user.first_name
			last_name = request.user.last_name
		else:	
			first_name = request.POST.get('first_name')	
			last_name = request.POST.get('last_name')

		comment = request.POST.get('comment')	
		com = Comment(comment=comment)
		com.first_name = first_name		
		com.last_name = last_name
		com.post = post
		com.save()
		return redirect(request.META.get('HTTP_REFERER'))


def contactus(request):
	if request.method == 'POST':
		if request.user.is_authenticated:
			fullname = f'{request.user.first_name} {request.user.last_name}'
			print(fullname)
			email = request.user.email
		else:
			fullname = request.POST.get('fullname')
			email = request.POST.get('email')
		subject = request.POST.get('subject')
		message = request.POST.get('message')

		send_mail(subject, message, email ,['sth@gmail.com'],fail_silently=False)
		messages.success(request, 'Success!')
		return redirect(request.META.get('HTTP_REFERER'))
	return render(request, 'posts/contact.html')


def about(request):
	return render(request, 'posts/about.html')


def allposts(request):
	posts = Post.objects.all().order_by('-date_added')
	return render(request, 'posts/allblogs.html', {'posts':posts})


def diagnostics(request):
	return render(request, 'posts/diagnostics.html')

        	
        	
        
        
        	
        	
        
        
        
        
        
        
        

        	
        
        