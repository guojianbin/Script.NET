
#==============================================================================#
# $Id: binary.rb,v 1.2 2005/04/30 15:37:02 yuya Exp $
#==============================================================================#

require 'exerb/resource/base'

#==============================================================================#

module Exerb
  class Resource
  end # Resource
end # Exerb

#==============================================================================#

class Exerb::Resource::Binary < Exerb::Resource::Base

  def initialize(bin)
    super()
    @bin = bin
  end

  def pack
    return @bin
  end

end # Exerb::Resource::Binary

#==============================================================================#
#==============================================================================#