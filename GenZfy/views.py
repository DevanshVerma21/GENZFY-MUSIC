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
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        # First check if user exists (by username or email)
        user_exists = (User.objects.filter(username__iexact=username).exists() or 
                      User.objects.filter(email__iexact=username).exists())
        
        if not user_exists:
            messages.error(request, 'User not found. Please register first.')
            return render(request, 'GenZfy/login.html')
        
        # Then check credentials if user exists
        user = (User.objects.filter(username__iexact=username, password=password).first() or 
                User.objects.filter(email__iexact=username, password=password).first())
        
        if user:
            request.session['user_id'] = user.id
            request.session['username'] = user.username.title()
            messages.success(request, 'Login successful')
            return render(request, 'GenZfy/login.html', {
                'login_success': True,
                'redirect_url': '/home/' 
            })
        else:
            messages.error(request, 'Invalid Credentials')
    
    return render(request, 'GenZfy/login.html')
def logout_view(request):
    # Clear user session data
    if 'user_id' in request.session:
        del request.session['user_id']
    if 'username' in request.session:
        del request.session['username']
    
    # Add success message
    messages.success(request, 'Logout successful')
    
    # Redirect to welcome page
    return redirect('welcome')
def login(request):
    return render(request, 'GenZfy/login.html')
def register(request):
    return render(request, 'GenZfy/signup.html')
def contact(request):
    return render(request, 'GenZfy/contactus.html')
def artists(request):
    return render(request, 'GenZfy/artists.html')