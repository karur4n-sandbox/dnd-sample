require 'synchro'

class PostController < ApplicationController
  protect_from_forgery :except => [:create]

  def new
  end

  def create
    upload_file = params[:csv]
    name = upload_file.original_filename
    if ['.csv'].include?(File.extname(name).downcase) && upload_file.content_type == 'text/csv'
      File.open("csv/#{Time.now.to_i}.csv", 'wb') { |f|f.write(upload_file.read) }
      Synchro::Synchro.run
    else
      p 'invalid なファイルです。'
    end
  end
end
