# OAuth Login integration info

NOTE: DO NOT INCLUDE ANY ACTUAL APP KEYS OR SECRET DATA HERE.  PUT IN LP Secure Storage!!!!!!!!!

-------------------------------------------------------------------------------

## Facebook Login App

<https://developers.facebook.com/>

Select Facebook Login

Register and create new app:

- My app: expressTestBRB

- URL: <http://localhost:81>  (Used for redirect after login)

- App id: <FB_APP_ID> (See LP for actual app id)

- App secret: <FB_APP_SECRET> (See LP for actual app secret)

- <https://developers.facebook.com/apps/\<FB_APP_ID\>/fb-login/quickstart/>

- Dashboard: <https://developers.facebook.com/apps/\<FB_APP_ID\>/dashboard/>

Copy code for javascript JDK:

    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '<FB_APP_ID>',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.8'
        });
        FB.AppEvents.logPageView();   
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>

Login button:

    <fb:login-button 
      scope="public_profile,email"
      onlogin="checkLoginState();">
    </fb:login-button>

    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }


Get the app secret:

<https://developers.facebook.com/docs/facebook-login/security#appsecret>

<https://developers.facebook.com/apps/\<FB_APP_ID\>/dashboard/>

-------------------------------------------------------------------------------

## Google login oath

<https://console.developers.google.com/projectselector/apis/credentials>

Create API credentials

Then create credentials:  

3 types: 

- API Key
- Oauth client ID
- Service account key 

API key -  <GOOGLE_API_KEY> (See LP for actual api key)

- restrict it
- Name: API key 1
- Key restriction: None

Oauth client - Need to set up Oauth consent screen first

Oauth consent screen - enter name of app, and URL

- name: Test 1
- url: <http://localhost:81>

Oauth client - Type is web application:

- Restrictions
- Authorized Javascript origins: <http://localhost:81>
- Authorized redirect URIs: <http://localhost:81/oauth/google/callback>

- client id:    <GOOGLE_CLIENT_ID> (See LP for actual client id)
- client scret:    <GOOGLE_CLIENT_SECRET> (See LP for actual client secret)
