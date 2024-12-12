package main

import (
	"fmt"
	"net/http"
)

type FormData struct {
	department         string
	fdate              string
	tdate              string
	MondayActivity1    string
	MondayDuration1    string
	TuesdayActivity1   string
	TuesdayDuration1   string
	WednesdayActivity1 string
	WednesdayDuration1 string
	ThursdayActivity1  string
	ThursdayDuration1  string
	FridayActivity1    string
	FridayDuration1    string
	SaturdayActivity1  string
	SaturdayDuration1  string
}

func formHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var Submission = new(FormData)

		Submission.department = r.FormValue("department")
		Submission.fdate = r.FormValue("fdate")
		Submission.tdate = r.FormValue("tdate")
		Submission.MondayActivity1 = r.FormValue("MondayActivity1")
		Submission.MondayDuration1 = r.FormValue("MondayDuration1")
		Submission.TuesdayActivity1 = r.FormValue("TuesdayActivity1")
		Submission.TuesdayDuration1 = r.FormValue("TuesdayDuration1")
		Submission.WednesdayActivity1 = r.FormValue("WednesdayActivity1")
		Submission.WednesdayDuration1 = r.FormValue("WednesdayDuration1")
		Submission.ThursdayActivity1 = r.FormValue("ThursdayActivity1")
		Submission.ThursdayDuration1 = r.FormValue("ThursdayDuration1")
		Submission.FridayActivity1 = r.FormValue("FridayActivity1")
		Submission.FridayDuration1 = r.FormValue("FridayDuration1")
		Submission.SaturdayActivity1 = r.FormValue("SaturdayActivity1")
		Submission.SaturdayDuration1 = r.FormValue("SaturdayDuration1")

		fmt.Println(Submission)
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}

func main() {

	http.Handle("/", http.FileServer(http.Dir("./")))
	http.HandleFunc("/submit", formHandler)
	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
