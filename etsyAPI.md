# Etsy API Info


# Etsy website
We'll make a request to get details for the user that runs the official Etsy store, "EtsyStore" using the getUser method. You can also substitute your own user name for "EtsyStore". If you consult the documentation for that method, you'll see the following:

Method Name:	getUser
Synopsis:	Retrieves a User by id.
HTTP Method:	GET
URI:	/users/:user_id
Parameters:	
Name: user_id	
Required: 	Y
Default: 
Type: array(user_id_or_name)
Return Type:	User
Requires OAuth:	NO

## Every Etsy API request begins with the base URL:

https://openapi.etsy.com/v2

and ends with the URI for the command.  The part of the URI that reads :user_id is an embedded parameter—you'll need to substitute either the user name "etsystore" or the ID of the user you're trying to access.

https://openapi.etsy.com/v2/users/etsystore?api_key=zvc75b5f3o9khob7e0kd7nza


'etsystore' can be changed to anything you want

## Param types we need
- image
- currency
- product_id
- getProduct: to get a specific offering for a listing
- URI: /listings/:listing_id/products/:product_id
    - params: listing_id, product_id
