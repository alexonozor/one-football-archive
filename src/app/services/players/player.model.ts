// export interface SearchModel {
//     id: String;
//     active: String;
//     profileId: String;
// }

// could not use model because of - in profile-id which is not accepted by typescript.


export interface ProfileModel {
    id: String;
    profile: {
        age: number
        role: String,
        team: String,
        picture: String
    };

    stats: {
        blocks: number;
        totalTackles: number;
        interceptions: number;
        tacklesWon: number;
        yellowCards: number;
        passingAccuracy: number;
        clearances: number;
        totalCrosses: number;
        aerialDuelsWon: number;
        minutesPlayed: number;
        minutesPerGoal: number;
        headedGoals: number;
        foulsConceded: number;
        totalPasses: number;
        totalShots: number;
        otherGoals: number;
        duelsWon: number;
        shotsOnTarget: number;
        leftFootGoals: number;
        rightFootGoals: number;
        starts: number;
        goalsFromInsideBox: number;
        substitutionOff: number;
        foulsWon: number;
        assists: number;
        gamesPlayed: number;
        substitutionOn: number;
        redCards: number;
        goals: number;
        successfulCrosses: number;
        goalsFromOutsideBox: number;
    };

}
