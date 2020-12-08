from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from django import forms
from django.contrib.auth.models import User


class UserRegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'password1', 'password2']
        widgets = {
        	'username': forms.TextInput(attrs={'class':'inpt', 'required':True}), 
        	'email':forms.EmailInput(attrs={'class':'inpt', 'required':True}),
        	'first_name':forms.TextInput(attrs={'class':'inpt', 'required':True}),
        	'last_name':forms.TextInput(attrs={'class':'inpt', 'required':True}),
        	'password1':forms.PasswordInput(attrs={'class':'inpt', 'required':True}),
        	'password2':forms.PasswordInput(attrs={'class':'inpt', 'required':True}),

        }


