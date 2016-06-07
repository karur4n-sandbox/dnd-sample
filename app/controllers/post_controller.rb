class PostController < ApplicationController
  protect_from_forgery :except => [:create]

  def new
  end

  def create
    upload_file = params[:csv]
    name = upload_file.original_filename
    if ['.csv'].include?(File.extname(name).downcase) && upload_file.content_type == 'text/csv'
      File.open("tmp/#{name}", 'wb') {|f|f.write(upload_file.read)}
    else
      p 'invalid なファイルです。'
    end
  end
end
