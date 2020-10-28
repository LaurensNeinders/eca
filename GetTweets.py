from eca import *

from eca.generators import start_offline_tweets
import datetime
import textwrap

root_content_path = 'GetTweets_static'

@event('init')
def setup(ctx, e):
    start_offline_tweets('xfactor.txt', event_name='chirp',
                         time_factor=10000)

@event('chirp')
def tweet (ctx,e):
    #we receive a tweet
    tweet = e.data

    # make the text nicer
    # text = tweet['text']
    
    #generate output
    emit('tweet',tweet)

