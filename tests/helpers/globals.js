
// required for unit tests, normally loaded by the application in srw.html
var SIREPO_APP_VERSION = '1';
var SIREPO_APP_NAME = 'srw';
var KARMA_TEST_MODE = true;

var APP_SCHEMA = {
    "version": "20151209",
    "route": {
        "copySimulation": "/copy-simulation",
        "deleteSimulation": "/delete-simulation",
        "listSimulations": "/simulation-list/<simulation_type>",
        "newSimulation": "/new-simulation",
        "pythonSource": "/python-source/<simulation_type>/<simulation_id>",
        "root": "/<simulation_type>",
        "runBackground": "/run-background",
        "runCancel": "/run-cancel",
        "runSimulation": "/run",
        "runStatus": "/run-status",
        "simulationData": "/simulation/<simulation_type>/<simulation_id>",
        "simulationSchema": "/simulation-schema"
    },
    "enum": {
        "AnalyticalTreatment": [
            ["0", "None"],
            ["1", "Linear Term"],
            ["2", "Quadratic Term"],
            ["3", "From Waist"],
            ["4", "To Waist"]
        ],
        "ApertureShape": [
            ["r", "Rectangular"],
            ["c", "Circular"]
        ],
        "Characteristic": [
            ["0", "Single-Electron Intensity"],
            ["1", "Multi-Electron Intensity"],
            ["2", "Single-Electron Flux"],
            ["3", "Multi-Electron Flux"],
            ["4", "Single-Electron Radiation Phase"],
            ["5", "Re(E): Real part of Single-Electron Electric Field"],
            ["6", "Im(E): Imaginary part of Single-Electron Electric Field"],
            ["7", "Single-Electron Intensity, integrated over Time or Photon Energy (i.e. Fluence)"]
        ],
        "CRLShape": [
            ["1", "Parabolic"],
            ["2", "Circular"]
        ],
        "FocalPlane": [
            ["1", "Horizontal"],
            ["2", "Vertical"],
            ["3", "Both"]
        ],
        "Flux": [
            ["1", "Flux"],
            ["2", "Flux per Unit Surface"]
        ],
        "GaussianBeamPolarization": [
            ["1", "Linear Horizontal"],
            ["2", "Linear Vertical"],
            ["3", "Linear 45 degrees"],
            ["4", "Linear 135 degrees"],
            ["5", "Circular Right"],
            ["6", "Circular Left"]
        ],
        "SourceType": [
            ["u", "Electron Beam with Undulator"],
            ["m", "Electron Beam with Dipole"],
            ["g", "Gaussian Beam"]
        ],
        "MultipoleOrientation": [
            ["n", "Horizontal"],
            ["s", "Vertical"]
        ],
        "MirrorOrientation": [
            ["x", "X"],
            ["y", "Y"]
        ],
        "Polarization": [
            ["0", "Linear Horizontal"],
            ["1", "Linear Vertical"],
            ["2", "Linear 45 degrees"],
            ["3", "Linear 135 degrees"],
            ["4", "Circular Right"],
            ["5", "Circular Left"],
            ["6", "Total"]
        ],
        "PowerDensityMethod": [
            ["1", "Near Field"],
            ["2", "Far Field"]
        ],
        "Symmetry": [
            ["1", "Symmetrical"],
            ["-1", "Anti-symmetrical"]
        ]
    },
    "model": {
        "aperture": {
            "title": ["Element Name", "String"],
            "position": ["Nominal Position [m]", "Float"],
            "shape": ["Shape", "ApertureShape"],
            "horizontalSize": ["Horizontal Size [mm]", "Float"],
            "verticalSize": ["Vertical Size [mm]", "Float"],
            "horizontalOffset": ["Horizontal Offset [mm]", "Float"],
            "verticalOffset": ["Vertical Offset [mm]", "Float"]
        },
        "crl": {
            "title": ["Element Name", "String"],
            "position": ["Nominal Position [m]", "Float"],
            "focalPlane": ["Focal Plane", "FocalPlane"],
            "refractiveIndex": ["Refractive Index Decrements of Material", "Float"],
            "attenuationLength": ["Attenuation Length [m]", "Float"],
            "shape": ["Shape", "CRLShape"],
            "horizontalApertureSize": ["Horizontal Aperture Size [mm]", "Float"],
            "verticalApertureSize": ["Vertical Aperture Size [mm]", "Float"],
            "radius": ["Radius on Tip of Parabola [m]", "Float"],
            "numberOfLenses": ["Number of Lenses", "Integer"],
            "wallThickness": ["Wall Thickness at Tip of Parabola [m]", "Float"]
        },
        "electronBeam": {
            "beamSelector": ["Beam Name", "BeamList"],
            "name": ["Beam Name", "String"],
            "energy": ["Energy [GeV]", "Float"],
            "current": ["Current [A]", "Float"],
            "energyDeviation": ["Average Energy Deviation [GeV]", "Float"],
            "rmsSpread": ["RMS Energy Spread", "Float"],
            "horizontalPosition": ["Average Horizontal Position [mm]", "Float"],
            "verticalPosition": ["Average Vertical Position [mm]", "Float"],
            "horizontalEmittance": ["Horizontal Emittance [nm]", "Float"],
            "horizontalBeta": ["Horizontal Beta [m]", "Float"],
            "horizontalAlpha": ["Horizontal Alpha [rad]", "Float"],
            "horizontalDispersion": ["Horizontal Dispersion [m]", "Float"],
            "horizontalDispersionDerivative": ["Horizontal Dispersion Derivative [rad]", "Float"],
            "verticalEmittance": ["Vertical Emittance [nm]", "Float"],
            "verticalBeta": ["Vertical Beta [m]", "Float"],
            "verticalAlpha": ["Vertical Alpha [rad]", "Float"],
            "verticalDispersion": ["Vertical Dispersion [m]", "Float"],
            "verticalDispersionDerivative": ["Vertical Dispersion Derivative [rad]", "Float"]
        },
        "ellipsoidMirror": {
            "title": ["Element Name", "String"],
            "position": ["Nominal Position [m]", "Float"],
            "focalLength": ["Focal Length [m]", "Float"],
            "grazingAngle": ["Grazing Angle [mrad]", "Float"],
            "tangentialSize": ["Tangential Size [m]", "Float"],
            "sagittalSize": ["Sagittal Size [m]", "Float"],
            "normalVectorX": ["Horizontal Central Normal Vector", "Float"],
            "normalVectorY": ["Vertical Central Normal Vector", "Float"],
            "normalVectorZ": ["Longitudinal Central Normal Vector", "Float"],
            "tangentialVectorX": ["Horizontal Central Tangential Vector", "Float"],
            "tangentialVectorY": ["Vertical Central Tangential Vector", "Float"],
            "heightProfileFile": ["Height Profile Data File", "MirrorFile"],
            "orientation": ["Orientation of Reflection Plane", "MirrorOrientation"],
            "heightAmplification": ["Height Amplification Coefficient", "Float"]
        },
        "fluxReport": {
            "distanceFromSource": ["Distance From Source [m]", "Float"],
            "initialEnergy": ["Initial Photon Energy [eV]", "Float"],
            "finalEnergy": ["Final Photon Energy [eV]", "Float"],
            "horizontalPosition": ["Horizontal Center Position [mm]", "Float"],
            "horizontalApertureSize": ["Horizontal Aperture Size [mm]", "Float"],
            "verticalPosition": ["Vertical Center Position [mm]", "Float"],
            "verticalApertureSize": ["Vertical Aperture Size [mm]", "Float"],
            "longitudinalPrecision": ["Longitudinal Integration Precision", "Float"],
            "azimuthalPrecision": ["Azimuthal Integration Precision", "Float"],
            "fluxType": ["Flux Calculation", "Flux"],
            "polarization": ["Polarization Component to Extract", "Polarization"]
        },
        "gaussianBeam": {
            "waistX": ["Horizontal Waist Offset [µm]", "Float"],
            "waistY": ["Vertical Waist Offset [µm]", "Float"],
            "waistZ": ["Longitudinal Waist Position [µm]", "Float"],
            "waistAngleX": ["Horizontal Beam Angle [mrad]", "Float"],
            "waistAngleY": ["Vertical Beam Angle [mrad]", "Float"],
            "energyPerPulse": ["Energy per Pulse [J]", "Float"],
            "polarization": ["Polarization", "GaussianBeamPolarization"],
            "rmsSizeX": ["Horizontal RMS Waist [µm]", "Float"],
            "rmsSizeY": ["Vertical RMS Waist [µm]", "Float"],
            "rmsPulseDuration": ["RMS Pulse Duration [ps]", "Float"]
        },
        "gaussianBeamIntensityReport": {
            "distanceFromSource": ["Distance From Source [m]", "Float"],
            "horizontalPosition": ["Horizontal Center Position [mm]", "Float"],
            "horizontalRange": ["Range of Horizontal Position [mm]", "Float"],
            "verticalPosition": ["Vertical Center Position [mm]", "Float"],
            "verticalRange": ["Range of Vertical Position [mm]", "Float"],
            "sampleFactor": ["Sampling Factor", "Float"],
            "polarization": ["Polarization Component to Extract", "Polarization"],
            "characteristic": ["Characteristic to be Extracted", "Characteristic"]
        },
        "grating": {
            "title": ["Element Name", "String"],
            "position": ["Nominal Position [m]", "Float"],
            "tangentialSize": ["Tangential Size [m]", "Float"],
            "sagittalSize": ["Sagittal Size [m]", "Float"],
            "normalVectorX": ["Horizontal Central Normal Vector", "Float"],
            "normalVectorY": ["Vertical Central Normal Vector", "Float"],
            "normalVectorZ": ["Longitudinal Central Normal Vector", "Float"],
            "tangentialVectorX": ["Horizontal Central Tangential Vector", "Float"],
            "tangentialVectorY": ["Vertical Central Tangential Vector", "Float"],
            "diffractionOrder": ["Diffraction Order", "Float"],
            "grooveDensity0": ["Groove Density a0", "Float"],
            "grooveDensity1": ["Groove Density a1y", "Float"],
            "grooveDensity2": ["Groove Density a2y²", "Float"],
            "grooveDensity3": ["Groove Density a3y³", "Float"],
            "grooveDensity4": ["Groove Density a4y⁴", "Float"]
        },
        "initialIntensityReport": {
            "horizontalPosition": ["Horizontal Center Position [mm]", "Float"],
            "horizontalRange": ["Range of Horizontal Position [mm]", "Float"],
            "verticalPosition": ["Vertical Center Position [mm]", "Float"],
            "verticalRange": ["Range of Vertical Position [mm]", "Float"],
            "sampleFactor": ["Sampling Factor", "Float"],
            "precision": ["Relative Precision", "Float"],
            "polarization": ["Polarization Component to Extract", "Polarization"],
            "characteristic": ["Characteristic to be Extracted", "Characteristic"]
        },
        "intensityReport": {
            "distanceFromSource": ["Distance From Source [m]", "Float"],
            "initialEnergy": ["Initial Photon Energy [eV]", "Float"],
            "finalEnergy": ["Final Photon Energy [eV]", "Float"],
            "horizontalPosition": ["Horizontal Position [mm]", "Float"],
            "verticalPosition": ["Vertical Position [mm]", "Float"],
            "precision": ["Relative Precision", "Float"],
            "polarization": ["Polarization Component to Extract", "Polarization"]
        },
        "lens": {
            "title": ["Element Name", "String"],
            "position": ["Nominal Position [m]", "Float"],
            "horizontalFocalLength": ["Horizontal Focal Length [m]", "Float"],
            "verticalFocalLength": ["Vertical Focal Length [m]", "Float"],
            "horizontalOffset": ["Horizontal Offset [mm]", "Float"],
            "verticalOffset": ["Vertical Offset [mm]", "Float"]
        },
        "mirror": {
            "title": ["Element Name", "String"],
            "position": ["Nominal Position [m]", "Float"],
            "heightProfileFile": ["Height Profile Data File", "MirrorFile"],
            "orientation": ["Orientation of Reflection Plane", "MirrorOrientation"],
            "grazingAngle": ["Grazing Angle [mrad]", "Float"],
            "heightAmplification": ["Height Amplification Coefficient", "Float"],
            "horizontalTransverseSize": ["Horizontal Transverse Size [mm]", "Float"],
            "verticalTransverseSize": ["Vertical Transverse Size [mm]", "Float"]
        },
        "mirrorReport": {},
        "multipole": {
            "field": ["Magnetic Field [T]", "Float"],
            "distribution": ["Orientation", "MultipoleOrientation"],
            "length": ["Effective Length [m]", "Float"]
        },
        "obstacle": {
            "title": ["Element Name", "String"],
            "position": ["Nominal Position [m]", "Float"],
            "shape": ["Shape", "ApertureShape"],
            "horizontalSize": ["Horizontal Size [mm]", "Float"],
            "verticalSize": ["Vertical Size [mm]", "Float"],
            "horizontalOffset": ["Horizontal Offset [mm]", "Float"],
            "verticalOffset": ["Vertical Offset [mm]", "Float"]
        },
        "powerDensityReport": {
            "distanceFromSource": ["Distance From Source [m]", "Float"],
            "horizontalPosition": ["Horizontal Center Position [mm]", "Float"],
            "horizontalRange": ["Range of Horizontal Position [mm]", "Float"],
            "verticalPosition": ["Vertical Center Position [mm]", "Float"],
            "verticalRange": ["Range of Vertical Position [mm]", "Float"],
            "precision": ["Relative Precision", "Float"],
            "method": ["Power Density Computation Method", "PowerDensityMethod"]
        },
        "simulation": {
            "name": ["Name", "String"],
            "sourceType": ["Source Type", "SourceType"],
            "photonEnergy": ["Photon Energy [eV]", "Float"]
        },
        "undulator": {
            "period": ["Period [mm]", "Float"],
            "length": ["Length [m]", "Float"],
            "horizontalAmplitude": ["Horizontal Magnetic Field [T]", "Float"],
            "horizontalSymmetry": ["Horizontal Symmetry", "Symmetry"],
            "horizontalInitialPhase": ["Initial Horizontal Phase [rad]", "Float"],
            "verticalAmplitude": ["Vertical Magnetic Field [T]", "Float"],
            "verticalSymmetry": ["Vertical Symmetry", "Symmetry"],
            "verticalInitialPhase": ["Initial Vertical Phase [rad]", "Float"]
        },
        "watch": {
            "title": ["Element Name", "String"],
            "position": ["Nominal Position [m]", "Float"]
        },
        "watchpointReport": {
            "horizontalPosition": ["Horizontal Center Position [mm]", "Float"],
            "horizontalRange": ["Range of Horizontal Position [mm]", "Float"],
            "verticalPosition": ["Vertical Center Position [mm]", "Float"],
            "verticalRange": ["Range of Vertical Position [mm]", "Float"],
            "sampleFactor": ["Sampling Factor", "Float"],
            "precision": ["Relative Precision", "Float"],
            "polarization": ["Polarization Component to Extract", "Polarization"],
            "characteristic": ["Characteristic to be Extracted", "Characteristic"]
        }
    },
    "view": {
        "aperture": {
            "title": "Aperture",
            "basic": [],
            "advanced": [
                "title",
                "position",
                "shape",
                "horizontalSize",
                "verticalSize",
                "horizontalOffset",
                "verticalOffset"
            ]
        },
        "crl": {
            "title": "CRL",
            "basic": [],
            "advanced": [
                "title",
                "position",
                "focalPlane",
                "refractiveIndex",
                "attenuationLength",
                "shape",
                "horizontalApertureSize",
                "verticalApertureSize",
                "radius",
                "numberOfLenses",
                "wallThickness"
            ]
        },
        "electronBeam": {
            "title": "Electron Beam",
            "basic": [
                "beamSelector"
            ],
            "advanced": [
                "name",
                "energy",
                "current",
                "energyDeviation",
                "rmsSpread",
                "horizontalPosition",
                "verticalPosition",
                [
                    ["Horizontal Twiss Parameters", [
                        "horizontalEmittance",
                        "horizontalBeta",
                        "horizontalAlpha",
                        "horizontalDispersion",
                        "horizontalDispersionDerivative"
                    ]],
                    ["Vertical Twiss Parameters", [
                        "verticalEmittance",
                        "verticalBeta",
                        "verticalAlpha",
                        "verticalDispersion",
                        "verticalDispersionDerivative"
                    ]]
                ]
            ]
        },
        "gaussianBeam": {
            "title": "Gaussian Beam",
            "basic": [
                "simulation.photonEnergy",
                "energyPerPulse"
            ],
            "advanced": [
                "simulation.photonEnergy",
                "energyPerPulse",
                "polarization",
                "rmsPulseDuration",
                "waistZ",
                [
                    ["Horizontal", [
                        "rmsSizeX",
                        "waistX",
                        "waistAngleX"
                    ]],
                    ["Vertical", [
                        "rmsSizeY",
                        "waistY",
                        "waistAngleY"
                    ]]
                ]
            ]
        },
        "lens": {
            "title": "Lens",
            "basic": [],
            "advanced": [
                "title",
                "position",
                "horizontalFocalLength",
                "verticalFocalLength",
                "horizontalOffset",
                "verticalOffset"
            ]
        },
        "gaussianBeamIntensityReport": {
            "title": "Intensity Report",
            "basic": [],
            "advanced": [
                "distanceFromSource",
                "simulation.photonEnergy",
                "horizontalPosition",
                "horizontalRange",
                "verticalPosition",
                "verticalRange",
                "sampleFactor",
                "polarization",
                "characteristic"
            ]
        },
        "initialIntensityReport": {
            "title": "Initial Intensity Report",
            "basic": [],
            "advanced": [
                "simulation.photonEnergy",
                "horizontalPosition",
                "horizontalRange",
                "verticalPosition",
                "verticalRange",
                "sampleFactor",
                "precision",
                "polarization",
                "characteristic"
            ]
        },
        "intensityReport": {
            "title": "Intensity Report",
            "basic": [],
            "advanced": [
                "distanceFromSource",
                "initialEnergy",
                "finalEnergy",
                "horizontalPosition",
                "verticalPosition",
                "precision",
                "polarization"
            ]
        },
        "ellipsoidMirror": {
            "title": "Ellipsoid Mirror",
            "basic": [],
            "advanced": [
                "title",
                "position",
                "focalLength",
                "grazingAngle",
                "tangentialSize",
                "sagittalSize",
                "normalVectorX",
                "normalVectorY",
                "normalVectorZ",
                "tangentialVectorX",
                "tangentialVectorY",
                "heightProfileFile",
                "orientation",
                "heightAmplification"
            ]
        },
        "fluxReport": {
            "title": "Flux Report",
            "basic": [],
            "advanced": [
                "distanceFromSource",
                "initialEnergy",
                "finalEnergy",
                "horizontalPosition",
                "horizontalApertureSize",
                "verticalPosition",
                "verticalApertureSize",
                "longitudinalPrecision",
                "azimuthalPrecision",
                "fluxType",
                "polarization"
            ]
        },
        "grating": {
            "title": "Grating",
            "basic": [],
            "advanced": [
                "title",
                "position",
                "tangentialSize",
                "sagittalSize",
                "normalVectorX",
                "normalVectorY",
                "normalVectorZ",
                "tangentialVectorX",
                "tangentialVectorY",
                "diffractionOrder",
                "grooveDensity0",
                "grooveDensity1",
                "grooveDensity2",
                "grooveDensity3",
                "grooveDensity4"
            ]
        },
        "mirror": {
            "title": "Flat Mirror",
            "basic": [],
            "advanced": [
                "title",
                "position",
                "heightProfileFile",
                "orientation",
                "grazingAngle",
                "heightAmplification",
                "horizontalTransverseSize",
                "verticalTransverseSize"
            ]
        },
        "mirrorReport": {
            "title": "Mirror",
            "basic": [],
            "advanced": []
        },
        "multipole": {
            "title": "Dipole",
            "basic": [
                "field",
                "length",
                "distribution"
            ],
            "advanced": []
        },
        "obstacle": {
            "title": "Obstacle",
            "basic": [],
            "advanced": [
                "title",
                "position",
                "shape",
                "horizontalSize",
                "verticalSize",
                "horizontalOffset",
                "verticalOffset"
            ]
        },
        "powerDensityReport": {
            "title": "Power Density Report",
            "basic": [],
            "advanced": [
                "distanceFromSource",
                "horizontalPosition",
                "horizontalRange",
                "verticalPosition",
                "verticalRange",
                "precision",
                "method"
            ]
        },
        "simulation": {
            "title": "Source",
            "advanced": [
                "name",
                "sourceType"
            ]
        },
        "undulator": {
            "title": "Undulator",
            "basic": [
                "period",
                "length",
                "verticalAmplitude"
            ],
            "advanced": [
                "period",
                "length",
                [
                    ["Horizontal", [
                        "horizontalAmplitude",
                        "horizontalSymmetry",
                        "horizontalInitialPhase"
                    ]],
                    ["Vertical", [
                        "verticalAmplitude",
                        "verticalSymmetry",
                        "verticalInitialPhase"
                    ]]
                ]
            ]
        },
        "watch": {
            "title": "Watchpoint",
            "basic": [],
            "advanced": [
                "title",
                "position"
            ]
        },
        "watchpointReport": {
            "title": "Watchpoint Report",
            "basic": [],
            "advanced": [
                "simulation.photonEnergy",
                "horizontalPosition",
                "horizontalRange",
                "verticalPosition",
                "verticalRange",
                "sampleFactor",
                "precision",
                "polarization",
                "characteristic"
            ]
        }
    }
};
