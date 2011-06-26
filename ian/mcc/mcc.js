(function() {

  var other = {"id": 0, "description": "Other"};

  mcc = function(code) {
    return mcc.codes[code] || other;
  };

  mcc.codes = {
    "apparel_and_accessory_shops": {"id": 5699, "description": "Apparel & Accessories"},
    "art_dealers_galleries": {"id": 5971, "description": "Art Dealers & Galleries"},
    "art_design_and_photography": {"id": 7333, "description": "Art, Design, & Photography"},
    "beauty_and_barber_shops": {"id": 7230, "description": "Beauty & Barber"},
    "business_services": {"id": 7399, "description": "Business Services"},
    "charitable_social_service_organizations": {"id": 8398, "description": "Charity & Social Service"},
    "computer_equipment_software_maintenance_repair_services": {"id": 7379, "description": "Computer Services"},
    "contractors": {"id": 1520, "description": "Contracting"},
    "food_stores_convenience_stores_and_specialty_markets": {"id": 5499, "description": "Food & Specialty Retail"},
    "individual_use": {"id": 7299, "description": "Individual Use"},
    "landscaping_and_horticultural_services": {"id": 0780, "description": "Landscaping & Horticultural"},
    "medical_services_and_health_practitioners": {"id": 8099, "description": "Medical & Health Services"},
    "membership_organizations": {"id": 8699, "description": "Membership Organization"},
    "music_and_entertainment": {"id": 7929, "description": "Music & Entertainment"},
    "personal_services": {"id": 7299, "description": "Personal Services"},
    "professional_services": {"id": 8999, "description": "Professional Services"},
    "recreation_services": {"id": 7999, "description": "Recreation Services"},
    "repair_shops_and_related_services": {"id": 7699, "description": "Repair & Related Services"},
    "restaurants": {"id": 5812, "description": "Restaurant"},
    "retail_shops": {"id": 5999, "description": "General Retail"},
    "schools_and_educational_services": {"id": 8299, "description": "Schools & Educational Services"},
    "taxicabs_and_limousines": {"id": 4121, "description": "Taxis & Limos"},
    "veterinary_services": {"id": 0742, "description": "Veterinary"}
  };

})();
