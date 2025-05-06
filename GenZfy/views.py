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
    return render(request, 'GenZfy/signup.html')