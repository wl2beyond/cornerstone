from flask import Flask

from Cornerstone.routes.datastax.cornerstone import rest
from Cornerstone.routes.datastax.cornerstone.gui import gui_endpoint
from Cornerstone.routes.datastax.cornerstone.rest import rest_endpoint
from Cornerstone.routes.datastax.cornerstone.google_charts import gcharts_endpoint

app = Flask(__name__)
app.config.from_pyfile('/cornerstone/web/datastax/cornerstone-python/Cornerstone/application.cfg')

app.register_blueprint(gui_endpoint)
app.register_blueprint(rest_endpoint, url_prefix='/api')
app.register_blueprint(gcharts_endpoint, url_prefix='/gcharts')


def start():
    rest.init_cassandra(app.config['DSE_CLUSTER'].split(','),
                        app.config['DSE_SOLR_DC'])

    app.run(host='0.0.0.0',
            port=5000,
            use_reloader=True,
            threaded=True)
