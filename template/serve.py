#!/usr/bin/env python3
"""
serve.py — simple local server to preview the `template` site.

Usage:
    python serve.py            # serve the folder on http://localhost:8000/ and open browser
    python serve.py -p 9000    # serve on port 9000
    python serve.py --no-open  # do not open browser automatically

The script serves the directory where it lives (the `template` folder).
"""
import argparse
import os
import webbrowser
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler


def run_server(host: str, port: int, directory: str, open_browser: bool) -> None:
    os.chdir(directory)
    handler = SimpleHTTPRequestHandler
    url = f'http://{host}:{port}/'
    with ThreadingHTTPServer((host, port), handler) as httpd:
        print(f'Serving {directory} at {url}')
        if open_browser:
            try:
                webbrowser.open(url)
            except Exception:
                pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nServer stopped by user')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Serve the template folder for local preview')
    parser.add_argument('-p', '--port', type=int, default=8000, help='Port to serve on (default: 8000)')
    parser.add_argument('-H', '--host', default='localhost', help='Host to bind to (default: localhost)')
    # Default behavior: open browser automatically. Use --no-open to disable.
    group = parser.add_mutually_exclusive_group()
    group.add_argument('-o', '--open', dest='open', action='store_true', help='Open default browser after starting')
    group.add_argument('--no-open', dest='open', action='store_false', help='Do not open browser')
    parser.set_defaults(open=True)
    parser.add_argument('-d', '--dir', default=None, help='Directory to serve (default: script directory)')
    args = parser.parse_args()

    script_dir = os.path.dirname(os.path.abspath(__file__))
    directory = args.dir if args.dir else script_dir

    if not os.path.isdir(directory):
        raise SystemExit(f'Directory does not exist: {directory}')

    run_server(args.host, args.port, directory, args.open)
