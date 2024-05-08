from django.urls import path
from base.views import user_views



urlpatterns = [
    
    path('login/',user_views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('register/',user_views.registerUser,name='register'),
    path('profile/',user_views.getUserProfile,name='user-profile'),
    path('profile/update/',user_views.updateUserProfile,name='user-profile-update'),
    path('address/',user_views.getUserAddress,name='user-address'),
    
    #For Admin only
    path('',user_views.getUsers,name='users'),
]