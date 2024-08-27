import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone } = req.body;
    if (!firstName || !lastName || !email || !date || !time || !phone) {
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }

    try {
        // Create a new reservation document
        await Reservation.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            date: date,
            time: time,
            phone: phone
        });

        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(" , "), 400));
        }
        return next(error);
    }
};
