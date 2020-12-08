from django.shortcuts import render, redirect
from .forms import UserRegisterForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .decorators import guest
from .models import Subscription
from django.core.mail import send_mail
# Create your views here.


# saves email for subscription to news letter
def subscribe(request):
    if request.method == "POST":
        emailAddress = request.POST.get('email')
        if Subscription.objects.filter(email=emailAddress).exists():
            messages.warning(request, 'Email already exists')
        else:
            subscription = Subscription.objects.create(email=emailAddress)
        return redirect(request.META.get('HTTP_REFERER'))
    else:
        return redirect('Post-home')


def send_newsletter(request):
    if request.method == 'POST' and request.user.is_staff:
        subscriptions = Subscription.objects.all()
        subject = request.POST.get('subject')
        body = request.POST.get('body')
        for subscription in subscriptions:
            send_mail(subject, body, 'moyosoreolumideobi@gmail.com' ,[subscription.email],fail_silently=False)
        messages.success(request, 'Successful')
        return redirect('Post-home')
    return render(request, 'users/newsletter.html')

@guest
def register_user(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)

        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, 'Successfully created account for ', username)
            return redirect('login')
    else:
        form = UserRegisterForm()    
    return render(request, 'users/register.html', {'form': form})


@guest
def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, 'Successfully authenticated')
            return redirect('Post-home')
        else:
            messages.error(request, 'Incorrect credentials')
            return redirect('login')

    return render(request, 'users/login.html')


@login_required
def logout_user(request):
    logout(request)
    return redirect('login')
