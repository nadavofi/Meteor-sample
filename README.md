# Meteor-sample
General sample of Meteor with Cloudinary

# One-time installations

### Meteor:
curl https://install.meteor.com/ | sh
meteor npm install --save babel-runtime

### Lepozepo plugin for Cloudinary:
meteor add lepozepo:cloudinary
More information here: https://github.com/Lepozepo/cloudinary

# configuration
Create a config.js file under server/ folder filled with your personal information:

	Cloudinary.config({
		cloud_name: '########',
		api_key: '########',
		api_secret: '########'
	});
  
# Run in localhost
meteor run
In the browser navigate to: localhost:3000
