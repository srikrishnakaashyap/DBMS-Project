from flask import Blueprint, request, redirect, url_for, render_template, flash

from models.users import User

request_blueprint = Blueprint('request', __name__, template_folder="templates")


@request_blueprint.route('/request', methods=['POST'])
def request_function():
    print("Request Received")

    request_data = dict(request.json)
    # Query and Get Data with AWS                                         

    return request_data, 200

