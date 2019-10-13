type MaritalStatus = 'single' | 'married' | 'widowed';

type AgeRange = 'under65' | '65' | '66-60' | '70+'; // For Ireland only for now

interface IPerson {
    maritalStatus: MaritalStatus;
    employee: boolean;
    proprietaryDirector: boolean;
    controllingShareholder: boolean;
    principalCarerForChildren: boolean;
    ageRange: AgeRange;
}
