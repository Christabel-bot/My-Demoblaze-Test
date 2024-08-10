Feature: Demoblaze Ecommerce test validation​
 Application regression​
@regression @smoke


Logout button 
Given i open demoblaze E commerce 
When i put username 
Then i put password 
When i click sign in
Then i click logout
 Then i verify successful Logout

Scenario: Validate successful Logout
        Given i navigate to Demobaze Website
        When i click on Login
        Then i very Login form is accessible
        When i enter username and password
        Then i click on Login button
        Then i verify successful Login
        When i click on Logout
        Then i verify successful Logout