WIP

# Overview
Given a youtube ID e.g. gXLyQUFMQ9g
1. get the associated image e.g. https://img.youtube.com/vi/gXLyQUFMQ9g/0.jpg
2. add the youtube icon to center
3. save as youtube_gXLyQUFMQ9g.jpg

Alternative would be float an image over the original via CSS - but since we're using Markdown to generate content, we'll modify the image directly.

## Install Pillow
Pillow is the Python Image Library
```
pip install Pillow
```

## Get Python Watermark script
```
git clone https://github.com/theitrain/watermark
```

## Get an image for our youtube videos and store it in myimage dir
```
mkdir myimages
wget https://img.youtube.com/vi/Wm7_a1XDTac/0.jpg -P myimages/
```

## Get the logo we want to superimpose on our images

### Take 1: any old youtube icon image
```
wget https://github.com/Crashedmind/openstem.com-gatsby-material-UI/blob/master/static/assets/youtube.jpg?raw=true
```


```
python watermark.py  './myimages' 'youtube.jpg'
Traceback (most recent call last):
  File "watermark.py", line 49, in <module>
    image.paste(logo, ((imageWidth - logoWidth)/2, (imageHeight - logoHeight)/2), logo)
  File "~/.local/lib/python2.7/site-packages/PIL/Image.py", line 1440, in paste
    self.im.paste(im, box, mask.im)
ValueError: bad transparency mask

```
The logo needs to be transparent (the logo provided with watermark.py work AOK)

###Take 2: Get a free transparent youtube icon 
- http://pluspng.com/img-png/youtube-png-picture-png-image-2272.png
- resize it from 2400 to 200

'''
#this works
python watermark.py  './myimages' 'youtube-png-picture-png-image-2272.png'
'''




