# Let's get this party started
import falcon
import json
import Quandl # https://www.quandl.com/help/python
import code; # code.interact(local=locals())

ALLOWED_ORIGINS = ['http://localhost:3000'] # Or load this from a config file

class StocksResource:
    def on_get(self, req, resp):
        """Handles GET requests"""
        resp.status = falcon.HTTP_200  # This is the default status

        stock_data = Quandl.get("WIKI/AAPL", rows=1, api_key='MHfjujQZArKJ3yr78fGi')
        body = { 'stocks': [{
            'open': stock_data.Open[0],
            'high': stock_data.High[0],
            'low': stock_data.Low[0],
            'close': stock_data.Close[0],
            'volume': stock_data.Volume[0]
        }]}

        resp.body = json.dumps(body)

class CorsMiddleware(object):
    def process_request(self, request, response):
        origin = request.get_header('Origin')
        if origin in ALLOWED_ORIGINS:
            response.set_header('Access-Control-Allow-Origin', origin)


# falcon.API instances are callable WSGI apps
app = falcon.API(middleware=[CorsMiddleware()])

# Resources are represented by long-lived class instances
stocks = StocksResource()

# things will handle all requests to the '/things' URL path
app.add_route('/stocks', stocks)

# Run Server
if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    server = make_server('localhost', 8000, app)

    print("Listening on localhost:8000")
    server.serve_forever()
