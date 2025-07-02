from django.urls import path, include
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter

# create your pickyeats requests here
router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('register/', RegistrationView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UserInfoView.as_view()),
    path('user/update/', UserUpdateView.as_view()),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('address/', AddressCreateView.as_view()),  # new
    path('', include(router.urls)),
]
 