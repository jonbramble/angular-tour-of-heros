class HeroesController < ApplicationController
  def index
    @heroes = Hero.all
    respond_to do |format|
     format.json{ render json: @heroes}
    end
  end

  def show
   @hero = Hero.find(params[:id])
    respond_to do |format|
     format.json{ render json: @hero}
    end

  end

  def update
   @hero = Hero.find(params[:id])

    respond_to do |format|
      if @hero.update_attributes(hero_params)
        format.json { head :no_content }
      else
        format.json { render json: @hero.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def hero_params
    params.require(:hero).permit(:name)
  end

end
