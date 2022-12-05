(function(){
    var modules={
        "panel-main-aish-generic-astn":    			{url:"$H/p/panel-main.html",Table:"aish-generic-astn-sql",router:1},
        "panel-child-aish-generic-astn":    			{url:"$H/p/panel-child.html",Table:"aish-generic-astn-sql"},
        
        "participant-data":   		{url:"$H/m/participant/participant-data.html",Table:"aish-generic-astn-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-aish-generic-astn",
                                            questionnaire_setup:"online-questionnaire-setup-aish-generic-astn",
                                            online_questionnaire:"online-questionnaire-app-aish-generic-astn",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$H/m/participant/participant-form.html",Table:"aish-generic-astn-participant"},

        "online-questionnaire-setup-aish-generic-astn": 	{url:"$H/online-questionnaire/m/setup.html",Table:"aish-generic-astn-participant"},
        "online-questionnaire-app-aish-generic-astn":    {url:"$H/online-questionnaire/index.html"},

        "notes":  		  	  			{url:"$H/m/notes.html"},
        "notes-data":  	    {url:"$H/m/notes-data.html",Table:"aish-generic-astn-notes",form_module:"notes-form",router:1},
        "notes-form":  	    {url:"$H/m/notes-form.html",Table:"aish-generic-astn-notes"},
        "sql-setup-form":  	    {url:"$H/m/sql-setup-form.html",Table:"aish-generic-astn-sql"},

        "consent-astn-data": { url: "$H/m/consent-astn-data.html", Table: "aish-generic-astn-consent-astn-20002423", form_module: "consent-astn-form" , task_name:"Consent"},
        "consent-astn-form": { url: "$H/m/consent-astn-form.html", Table: "aish-generic-astn-consent-astn-20002423", task_name:"Consent" },
        "background-information-astn-data": { url: "$H/m/background-information-astn-data.html", Table: "aish-generic-astn-background-information-astn-20002400", form_module: "background-information-astn-form", task_name:"Background Information" },
        "background-information-astn-form": { url: "$H/m/background-information-astn-form.html", Table: "aish-generic-astn-background-information-astn-20002400", task_name:"Background Information" },
        "general-astn-data": { url: "$H/m/general-astn-data.html", Table: "aish-generic-astn-general-astn-20002401", form_module: "general-astn-form", task_name:"General" },
        "general-astn-form": { url: "$H/m/general-astn-form.html", Table: "aish-generic-astn-general-astn-20002401", task_name:"General" },
        "ethnicity-self-astn-data": { url: "$H/m/ethnicity-self-astn-data.html", Table: "aish-generic-astn-ethnicity-self-astn-20002402", form_module: "ethnicity-self-astn-form", task_name:"Ethnicity" },
        "ethnicity-self-astn-form": { url: "$H/m/ethnicity-self-astn-form.html", Table: "aish-generic-astn-ethnicity-self-astn-20002402", task_name:"Ethnicity" },
        "lifestyle-astn-data": { url: "$H/m/lifestyle-astn-data.html", Table: "aish-generic-astn-lifestyle-astn-20002403", form_module: "lifestyle-astn-form", task_name:"Lifestyle" },
        "lifestyle-astn-form": { url: "$H/m/lifestyle-astn-form.html", Table: "aish-generic-astn-lifestyle-astn-20002403", task_name:"Lifestyle" },
        "medical-history-astn-data": { url: "$H/m/medical-history-astn-data.html", Table: "aish-generic-astn-medical-history-astn-20002404", form_module: "medical-history-astn-form", task_name:"Medical History" },
        "medical-history-astn-form": { url: "$H/m/medical-history-astn-form.html", Table: "aish-generic-astn-medical-history-astn-20002404", task_name:"Medical History" },
        "sleep-disorder-patterns-astn-data": { url: "$H/m/sleep-disorder-patterns-astn-data.html", Table: "aish-generic-astn-sleep-disorder-patterns-astn-20002405", form_module: "sleep-disorder-patterns-astn-form", task_name:"Sleep HQDP" },
        "sleep-disorder-patterns-astn-form": { url: "$H/m/sleep-disorder-patterns-astn-form.html", Table: "aish-generic-astn-sleep-disorder-patterns-astn-20002405", task_name:"Sleep HQDP" },
        "sleep-hygiene-index-astn-data": { url: "$H/m/sleep-hygiene-index-astn-data.html", Table: "aish-generic-astn-sleep-hygiene-index-astn-20003571", form_module: "sleep-hygiene-index-astn-form", task_name:"Sleep Hygiene Index" },
        "sleep-hygiene-index-astn-form": { url: "$H/m/sleep-hygiene-index-astn-form.html", Table: "aish-generic-astn-sleep-hygiene-index-astn-20003571", task_name:"Sleep Hygiene Index" },
        "family-sleep-history-astn-data": { url: "$H/m/family-sleep-history-astn-data.html", Table: "aish-generic-astn-family-sleep-history-astn-20002406", form_module: "family-sleep-history-astn-form", task_name:"Family Sleep History" },
        "family-sleep-history-astn-form": { url: "$H/m/family-sleep-history-astn-form.html", Table: "aish-generic-astn-family-sleep-history-astn-20002406", task_name:"Family Sleep History" },
        "medications-astn-data": { url: "$H/m/medications-astn-data.html", Table: "aish-generic-astn-medications-astn-20002407", form_module: "medications-astn-form", task_name:"Medications" },
        "medications-astn-form": { url: "$H/m/medications-astn-form.html", Table: "aish-generic-astn-medications-astn-20002407", task_name:"Medications" },
        "rec-drug-astn-data": { url: "$H/m/rec-drug-astn-data.html", Table: "aish-generic-astn-rec-drug-astn-20003574", form_module: "rec-drug-astn-form", task_name:"Recreational Drugs" },
        "rec-drug-astn-form": { url: "$H/m/rec-drug-astn-form.html", Table: "aish-generic-astn-rec-drug-astn-20003574", task_name:"Recreational Drugs" },
        "ess-astn-data": { url: "$H/m/ess-astn-data.html", Table: "aish-generic-astn-ess-astn-20002408", form_module: "ess-astn-form", task_name:"Epworth Sleepiness Scale" },
        "ess-astn-form": { url: "$H/m/ess-astn-form.html", Table: "aish-generic-astn-ess-astn-20002408", task_name:"Epworth Sleepiness Scale" },
        "map-astn-data": { url: "$H/m/map-astn-data.html", Table: "aish-generic-astn-map-astn-20002409", form_module: "map-astn-form", task_name:"Multivariate Apnea Prediction Questionnaire" },
        "map-astn-form": { url: "$H/m/map-astn-form.html", Table: "aish-generic-astn-map-astn-20002409", task_name:"Multivariate Apnea Prediction Questionnaire" },
        "isi-astn-data": { url: "$H/m/isi-astn-data.html", Table: "aish-generic-astn-isi-astn-20002410", form_module: "isi-astn-form", task_name:"Insomnia Severity Index" },
        "isi-astn-form": { url: "$H/m/isi-astn-form.html", Table: "aish-generic-astn-isi-astn-20002410", task_name:"Insomnia Severity Index" },
        "restless-leg-astn-data": { url: "$H/m/restless-leg-astn-data.html", Table: "aish-generic-astn-restless-leg-astn-20002411", form_module: "restless-leg-astn-form", task_name:"Restless Legs" },
        "restless-leg-astn-form": { url: "$H/m/restless-leg-astn-form.html", Table: "aish-generic-astn-restless-leg-astn-20002411", task_name:"Restless Legs" },
        "me-astn-data": { url: "$H/m/me-astn-data.html", Table: "aish-generic-astn-me-astn-20002412", form_module: "me-astn-form", task_name:"Horne & &#214;stberg Morningness-Eveningness Composite Questionnaire" },
        "me-astn-form": { url: "$H/m/me-astn-form.html", Table: "aish-generic-astn-me-astn-20002412", task_name:"Horne & &#214;stberg Morningness-Eveningness Composite Questionnaire" },
        "fosq-astn-data": { url: "$H/m/fosq-astn-data.html", Table: "aish-generic-astn-fosq-astn-20002413", form_module: "fosq-astn-form", task_name:"Functional Outcomes of Sleep Questionnaire" },
        "fosq-astn-form": { url: "$H/m/fosq-astn-form.html", Table: "aish-generic-astn-fosq-astn-20002413", task_name:"Functional Outcomes of Sleep Questionnaire" },
        "psqi-astn-data": { url: "$H/m/psqi-astn-data.html", Table: "aish-generic-astn-psqi-astn-20003576", form_module: "psqi-astn-form", task_name:"Pittsburgh Sleep Quality Index" },
        "psqi-astn-form": { url: "$H/m/psqi-astn-form.html", Table: "aish-generic-astn-psqi-astn-20003576", task_name:"Pittsburgh Sleep Quality Index" },
        "phq-astn-data": { url: "$H/m/phq-astn-data.html", Table: "aish-generic-astn-phq-astn-20002414", form_module: "phq-astn-form", task_name:"Patient Health Questionnaire (PHQ-9)" },
        "phq-astn-form": { url: "$H/m/phq-astn-form.html", Table: "aish-generic-astn-phq-astn-20002414", task_name:"Patient Health Questionnaire (PHQ-9)" },
        "gad7-astn-data": { url: "$H/m/gad7-astn-data.html", Table: "aish-generic-astn-gad7-astn-20002415", form_module: "gad7-astn-form", task_name:"Generalised Anxiety Disorder (GAD-7)" },
        "gad7-astn-form": { url: "$H/m/gad7-astn-form.html", Table: "aish-generic-astn-gad7-astn-20002415", task_name:"Generalised Anxiety Disorder (GAD-7)" },
        "dass-astn-data": { url: "$H/m/dass-astn-data.html", Table: "aish-generic-astn-dass-astn-20002416", form_module: "dass-astn-form", task_name:"Depression Anxiety Stress Scale (DASS-21)" },
        "dass-astn-form": { url: "$H/m/dass-astn-form.html", Table: "aish-generic-astn-dass-astn-20002416", task_name:"Depression Anxiety Stress Scale (DASS-21)" },
        "fss-astn-data": { url: "$H/m/fss-astn-data.html", Table: "aish-generic-astn-fss-astn-20002417", form_module: "fss-astn-form", task_name:"Fatigue Severity Scale (FSS)" },
        "fss-astn-form": { url: "$H/m/fss-astn-form.html", Table: "aish-generic-astn-fss-astn-20002417", task_name:"Fatigue Severity Scale (FSS)" },
        "sds-astn-data": { url: "$H/m/sds-astn-data.html", Table: "aish-generic-astn-sds-astn-20002418", form_module: "sds-astn-form", task_name:"Sheehan Disability Scale (SDS)" },
        "sds-astn-form": { url: "$H/m/sds-astn-form.html", Table: "aish-generic-astn-sds-astn-20002418", task_name:"Sheehan Disability Scale (SDS)" },
        "hwpq-astn-data": { url: "$H/m/hwpq-astn-data.html", Table: "aish-generic-astn-hwpq-astn-20002419", form_module: "hwpq-astn-form", task_name:"Health & Work Performance Questionnaire" },
        "hwpq-astn-form": { url: "$H/m/hwpq-astn-form.html", Table: "aish-generic-astn-hwpq-astn-20002419", task_name:"Health & Work Performance Questionnaire" },
        "shiftwork-astn-data": { url: "$H/m/shiftwork-astn-data.html", Table: "aish-generic-astn-shiftwork-astn-20002420", form_module: "shiftwork-astn-form", task_name:"Shiftwork" },
        "shiftwork-astn-form": { url: "$H/m/shiftwork-astn-form.html", Table: "aish-generic-astn-shiftwork-astn-20002420", task_name:"Shiftwork" },
        "shiftworkii-astn-data": { url: "$H/m/shiftworkii-astn-data.html", Table: "aish-generic-astn-shiftworkii-astn-20003584", form_module: "shiftworkii-astn-form", task_name:"Shiftwork II" },
        "shiftworkii-astn-form": { url: "$H/m/shiftworkii-astn-form.html", Table: "aish-generic-astn-shiftworkii-astn-20003584", task_name:"Shiftwork II" },
        "mva-astn-data": { url: "$H/m/mva-astn-data.html", Table: "aish-generic-astn-mva-astn-20002421", form_module: "mva-astn-form", task_name:"Motor Vehicle Accidents" },
        "mva-astn-form": { url: "$H/m/mva-astn-form.html", Table: "aish-generic-astn-mva-astn-20002421", task_name:"Motor Vehicle Accidents" },
        "wa-astn-data": { url: "$H/m/wa-astn-data.html", Table: "aish-generic-astn-wa-astn-20002422", form_module: "wa-astn-form", task_name:"Workplace Accidents" },
        "wa-astn-form": { url: "$H/m/wa-astn-form.html", Table: "aish-generic-astn-wa-astn-20002422", task_name:"Workplace Accidents" },
        "thank-you-astn-form": { url: "$H/m/thank-you-astn-form.html", Table: "aish-generic-astn-thank-you-astn", task_name:"Thank You" },
        "aused-30-data": { url: "$H/m/aused30-data.html", Table: "aish-generic-astn-aused-30", form_module: "aused-30-form", task_name:"Aused 30 mins" },
        "aused-30-form": { url: "$H/m/aused30-form.html", Table: "aish-generic-astn-aused-30", task_name:"Aused 30 mins" },
        "aused-60-data": { url: "$H/m/aused60-data.html", Table: "aish-generic-astn-aused-60", form_module: "aused-60-form", task_name:"Aused 60 mins" },
        "aused-60-form": { url: "$H/m/aused60-form.html", Table: "aish-generic-astn-aused-60", task_name:"Aused 60 mins" },
        "aused-70-data": { url: "$H/m/aused70-data.html", Table: "aish-generic-astn-aused-70", form_module: "aused-70-form", task_name:"Aused 70 mins" },
        "aused-70-form": { url: "$H/m/aused70-form.html", Table: "aish-generic-astn-aused-70", task_name:"Aused 70 mins" },
        "aused-90-data": { url: "$H/m/aused90-data.html", Table: "aish-generic-astn-aused-90", form_module: "aused-90-form", task_name:"Aused 90 mins" },
        "aused-90-form": { url: "$H/m/aused90-form.html", Table: "aish-generic-astn-aused-90", task_name:"Aused 90 mins" },
        "aused-crash-data": { url: "$H/m/aused-crash-time-data.html", Table: "aish-generic-astn-aused-crash", form_module: "aused-crash-form", task_name:"Aused Crash Data" },
        "aused-crash-form": { url: "$H/m/aused-crash-time-form.html", Table: "aish-generic-astn-aused-crash", task_name:"Aused Crash Data" },
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.href.indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
