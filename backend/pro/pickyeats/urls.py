from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView

# create your pickyeats requests here

urlpatterns = [
    path('register/', RegistrationView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UserInfoView.as_view()),
    path('user/update/', UserUpdateView.as_view()),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('address/', AddressCreateView.as_view()),  # new
]
