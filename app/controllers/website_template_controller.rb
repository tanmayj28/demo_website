class WebsiteTemplateController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.css
    end
  end
  
  def contact
  	render 'website_template/contact-us'
  end

  def roomDetails
  	render 'website_template/room-details'
  end

  def modifyBooking
  	render 'website_template/modify-booking'
  end

  def termsConditions
  	render 'website_template/terms-conditions'
  end

  def cancelledConfirm
  	render 'website_template/cancelled-confirm'
  end

  def cancelledBooking
  	render 'website_template/cancelled-booking'
  end

  def bookingDetails
    render 'website_template/booking-details'
  end

  def searchResult
    render 'website_template/search-result'
  end
end
