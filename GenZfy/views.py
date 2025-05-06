from django.shortcuts import render

def welcome(request):
    return render(request, 'GenZfy/welcome.html')
def playlist(request):
    return render(request, 'GenZfy/playlist.html')
def signup_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if User.objects.filter(username__iexact=username).exists():
            messages.error(request, 'Username already exists')
            return redirect('signup')
        if User.objects.filter(email__iexact=email).exists():
            messages.error(request, 'Email already exists')
            return redirect('signup')

        User.objects.create(username=username, email=email, password=password)
        messages.success(request, 'Signup successful! Redirecting to login...')
        return render(request, 'GenZfy/signup.html', {
            'signup_success': True,
            'redirect_url': '/login/'
        })
    return render(request, 'GenZfy/signup.html')